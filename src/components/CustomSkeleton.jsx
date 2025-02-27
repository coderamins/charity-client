import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CustomSkeleton = ({ linecount }) => {
    return (
        <SkeletonTheme baseColor="#efefef" highlightColor="#aaa">
          <p>
            <Skeleton count={linecount} />
          </p>
        </SkeletonTheme>
      );
  };
  
  export { CustomSkeleton };
  