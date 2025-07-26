import { FC, memo } from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import { cn } from '@/lib/utils';

interface MarkdownProps extends Omit<Options, 'className'> {
  className?: string;
}

export const MemoizedReactMarkdown: FC<MarkdownProps> = memo(
  ({ className, components, ...props }) => (
    <ReactMarkdown
      components={{
        div: ({ children, ...divProps }) => (
          <div className={cn(className)} {...divProps}>
            {children}
          </div>
        ),
        ...components
      }}
      {...props}
    />
  ),
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

MemoizedReactMarkdown.displayName = 'MemoizedReactMarkdown';
