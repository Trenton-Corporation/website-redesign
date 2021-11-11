import ButtonLink from "./ButtonLink";

export default function SendAMessageButtonLink() {
  return (
    <ButtonLink
      isNextLink={true}
      className="sendAMessageLink"
      href="/contact"
      text="Send a message"
    />
  );
}
