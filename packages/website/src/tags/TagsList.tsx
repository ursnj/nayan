import { Link } from 'react-router-dom';
import { NBadge, BadgeSize } from '@nayan-ui/react';

interface Props {
  tags: { sku: string; text: string }[];
}

const TagsList = (props: Props) => {
  return (
    <div className="video-tags mb-3">
      <div className="flex flex-row flex-wrap items-center">
        {props.tags.map(tag => (
          <Link to={`/tags/${tag.sku}`} key={tag.sku} className="mr-3 mb-3 rounded-full">
            <NBadge size={BadgeSize.MD} className="text-text bg-card border border-border py-1">
              {tag.text}
            </NBadge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
