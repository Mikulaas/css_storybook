import { Margin } from "./Margin";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/Margin",
  component: Margin,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Margin>;

const Template: ComponentStory<typeof Margin> = (args) => <Margin {...args} />;

export const CollapsingMargin = Template.bind({});
