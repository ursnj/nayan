import * as React from 'react';
import { Platform } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@rn-primitives/switch';
import { useNTheme } from '@/hooks/useNTheme';

const SwitchWeb = React.forwardRef<SwitchPrimitives.RootRef, SwitchPrimitives.RootProps>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer flex-row h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed',
      props.checked ? 'bg-primary' : 'bg-input',
      props.disabled && 'opacity-50',
      className
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-md shadow-foreground/5 ring-0 transition-transform',
        props.checked ? 'translate-x-5' : 'translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));

SwitchWeb.displayName = 'SwitchWeb';

const SwitchNative = React.forwardRef<SwitchPrimitives.RootRef, SwitchPrimitives.RootProps>(({ className, ...props }, ref) => {
  const { colors } = useNTheme();
  const translateX = useDerivedValue(() => (props.checked ? 18 : 0));
  const animatedRootStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(translateX.value, [0, 18], [colors.card, colors.primary])
    };
  });
  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(translateX.value, { duration: 200 }) }]
  }));
  return (
    <Animated.View style={animatedRootStyle} className={cn('h-8 w-[46px] rounded-full', props.disabled && 'opacity-50')}>
      <SwitchPrimitives.Root
        className={cn(
          'flex-row h-8 w-[46px] shrink-0 items-center rounded-full border-2 border-transparent',
          props.checked ? 'bg-primary' : 'bg-input',
          className
        )}
        {...props}
        ref={ref}>
        <Animated.View style={animatedThumbStyle}>
          <SwitchPrimitives.Thumb className={'h-7 w-7 rounded-full bg-background shadow-md shadow-foreground/25 ring-0'} />
        </Animated.View>
      </SwitchPrimitives.Root>
    </Animated.View>
  );
});
SwitchNative.displayName = 'SwitchNative';

const Switch: React.ForwardRefExoticComponent<SwitchPrimitives.RootProps & React.RefAttributes<SwitchPrimitives.RootRef>> = Platform.select({
  web: SwitchWeb,
  default: SwitchNative
});

export { Switch };
