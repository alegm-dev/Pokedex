import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";

export const ContentPlaceholder = () => (
  <Placeholder Animation={Fade} Right={PlaceholderMedia}>
    <PlaceholderLine width={80} />
    <PlaceholderLine />
    <PlaceholderLine width={30} />
  </Placeholder>
);
