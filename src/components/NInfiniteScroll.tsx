import React, { useState, useEffect, useRef } from 'react';
import { ThresholdUnits, parseThreshold, throttle } from './Utils';

type Fn = () => any;
export interface Props {
  next: Fn;
  hasMore: boolean;
  children: React.ReactNode;
  loader: React.ReactNode;
  scrollThreshold?: number | string;
  endMessage?: React.ReactNode;
  style?: React.CSSProperties;
  height?: number | string;
  scrollableTarget?: React.ReactNode;
  hasChildren?: boolean;
  inverse?: boolean;
  pullDownToRefresh?: boolean;
  pullDownToRefreshContent?: React.ReactNode;
  releaseToRefreshContent?: React.ReactNode;
  pullDownToRefreshThreshold?: number;
  refreshFunction?: Fn;
  onScroll?: (e: MouseEvent) => any;
  dataLength: number;
  initialScrollY?: number;
  className?: string;
}

interface State {
  showLoader: boolean;
  pullToRefreshThresholdBreached: boolean;
  prevDataLength: number | undefined;
}

const InfiniteScroll: React.FC<Props> = props => {
  const [showLoader, setShowLoader] = useState(false);
  const [pullToRefreshThresholdBreached, setPullToRefreshThresholdBreached] = useState(false);
  const [prevDataLength, setPrevDataLength] = useState<number | undefined>(props.dataLength);

  const scrollableNodeRef = useRef<HTMLElement | null>(null);
  const infScrollRef = useRef<HTMLDivElement | null>(null);
  const pullDownRef = useRef<HTMLDivElement | null>(null);

  const startY = useRef(0);
  const currentY = useRef(0);
  const dragging = useRef(false);
  const maxPullDownDistance = useRef(0);
  const lastScrollTop = useRef(0);
  const actionTriggered = useRef(false);

  const onScrollListener = () => {
    const el = props.scrollableTarget || window;

    if (!el || dragging.current) return;

    const scrollTop = el instanceof Window ? el.pageYOffset : el.scrollTop;
    const scrollHeight = el instanceof Window ? el.document.documentElement.scrollHeight : el.scrollHeight;
    const clientHeight = (el.clientHeight || document.documentElement.clientHeight) + props.pullDownToRefreshThreshold!;

    const scrolledToBottom = Math.abs(scrollHeight - scrollTop - clientHeight) <= 1;

    if (scrolledToBottom && !showLoader && props.hasMore) {
      callNext();
    }

    if (props.pullDownToRefresh) {
      const scrollable = scrollableNodeRef.current!;
      if (scrollable.scrollTop === 0 && !pullToRefreshThresholdBreached) {
        scrollable.style.overflowY = 'hidden';
        setPullToRefreshThresholdBreached(true);
      } else if (scrollable.scrollTop !== 0 && pullToRefreshThresholdBreached) {
        setPullToRefreshThresholdBreached(false);
        scrollable.style.overflowY = 'auto';
      }
    }

    if (props.onScroll) {
      props.onScroll(el);
    }
  };

  const throttledOnScrollListener = useRef(throttle(150, onScrollListener));

  useEffect(() => {
    if (typeof props.dataLength === 'undefined') {
      throw new Error(`mandatory prop "dataLength" is missing. The prop is needed` + ` when loading more content. Check README.md for usage`);
    }

    scrollableNodeRef.current = getScrollableTarget();
    const el = props.height ? infScrollRef.current : scrollableNodeRef.current || window;

    if (el) {
      el.addEventListener('scroll', throttledOnScrollListener.current);
    }

    if (typeof props.initialScrollY === 'number' && el && el instanceof HTMLElement && el.scrollHeight > props.initialScrollY) {
      el.scrollTo(0, props.initialScrollY);
    }

    if (props.pullDownToRefresh && el) {
      el.addEventListener('touchstart', onStart);
      el.addEventListener('touchmove', onMove);
      el.addEventListener('touchend', onEnd);

      el.addEventListener('mousedown', onStart);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseup', onEnd);

      maxPullDownDistance.current =
        (pullDownRef.current &&
          pullDownRef.current.firstChild &&
          (pullDownRef.current.firstChild as HTMLDivElement).getBoundingClientRect().height) ||
        0;
      if (typeof props.refreshFunction !== 'function') {
        throw new Error(
          `Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`
        );
      }
    }

    return () => {
      if (el) {
        el.removeEventListener('scroll', throttledOnScrollListener.current);
        el.removeEventListener('touchstart', onStart);
        el.removeEventListener('touchmove', onMove);
        el.removeEventListener('touchend', onEnd);
        el.removeEventListener('mousedown', onStart);
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseup', onEnd);
      }
    };
  }, []);

  useEffect(() => {
    if (props.dataLength !== prevDataLength) {
      setPrevDataLength(props.dataLength);
      setShowLoader(false);
    }
  }, [props.dataLength]);

  useEffect(() => {
    if (typeof props.scrollThreshold === 'string') {
      const [value, unit] = parseThreshold(props.scrollThreshold);
      const scrollableNode = scrollableNodeRef.current;

      if (scrollableNode) {
        const threshold = calculateThreshold(value, unit, scrollableNode);
        throttledOnScrollListener.current = throttle(threshold, onScrollListener);
      }
    }
  }, [props.scrollThreshold]);

  useEffect(() => {
    const el = props.height ? infScrollRef.current : scrollableNodeRef.current || window;
    if (el) {
      if (el.scrollHeight <= (el.clientHeight || document.documentElement.clientHeight) + props.pullDownToRefreshThreshold!) {
        callNext();
      }
    }
  });

  const onStart = (e: Event) => {
    const el = props.scrollableTarget || window;
    dragging.current = true;
    if (e instanceof TouchEvent) {
      startY.current = e.touches[0].screenY;
    } else {
      startY.current = e.screenY;
    }
    currentY.current = startY.current;

    el.addEventListener('touchmove', onMove);
    el.addEventListener('touchend', onEnd);

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseup', onEnd);
  };

  const onMove = (e: Event) => {
    if (dragging.current) {
      if (e instanceof TouchEvent) {
        currentY.current = e.touches[0].screenY;
      } else {
        currentY.current = e.screenY;
      }

      const diff = currentY.current - startY.current;
      if (diff > 0) {
        e.preventDefault();
      }

      pullDownRef.current!.style.height = `${diff > 150 ? 150 : diff}px`;
      if (diff > maxPullDownDistance.current) {
        setPullToRefreshThresholdBreached(true);
      } else {
        setPullToRefreshThresholdBreached(false);
      }
    }
  };

  const onEnd = () => {
    if (dragging.current) {
      dragging.current = false;
      setPullToRefreshThresholdBreached(false);
      pullDownRef.current!.style.height = '0px';
      if (props.refreshFunction && maxPullDownDistance.current > 0) {
        if (maxPullDownDistance.current > currentY.current - startY.current) {
          if (!actionTriggered.current) {
            props.refreshFunction();
            actionTriggered.current = true;
          }
        }
      }
      currentY.current = 0;
      startY.current = 0;
    }
  };

  const callNext = () => {
    if (!actionTriggered.current) {
      setShowLoader(true);
      actionTriggered.current = true;
      props.next();
    }
  };

  const getScrollableTarget = () => {
    const { scrollableTarget } = props;
    if (scrollableTarget && typeof scrollableTarget !== 'string') {
      return scrollableTarget;
    } else if (scrollableTarget) {
      return document.getElementById(scrollableTarget);
    } else {
      return null;
    }
  };

  const calculateThreshold = (value: number, unit: ThresholdUnits, scrollableNode: HTMLElement) => {
    if (unit === ThresholdUnits.Pixel) {
      return value;
    } else {
      const threshold = (value / 100) * scrollableNode.clientHeight;
      return threshold;
    }
  };

  return (
    <div style={{ ...props.style, overflowY: 'auto' }} className={props.className} ref={infScrollRef}>
      {props.pullDownToRefresh && (
        <div
          style={{
            position: 'relative',
            height: '0px',
            overflow: 'hidden'
          }}
          ref={pullDownRef}>
          {pullToRefreshThresholdBreached ? <div>{props.releaseToRefreshContent}</div> : <div>{props.pullDownToRefreshContent}</div>}
        </div>
      )}
      {props.children}
      {showLoader && props.hasMore && props.loader}
      {!props.hasMore && props.endMessage}
    </div>
  );
};

export default InfiniteScroll;
