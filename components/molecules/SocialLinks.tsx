export default function SocialLinks(props: {
  className?: string;
  childClassName?: string;
}) {
  return (
    <ul data-testid="social" className={props.className}>
      <li>
        <a
          href="https://www.youtube.com/user/TrentonCorpVideos?feature=watch"
          className={props.childClassName}
        >
          YouTube
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/trenton-corporation-anticorrosion-materials"
          className={props.childClassName}
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}
