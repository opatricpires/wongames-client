import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: '',
    title: 'Defy death',
    subtitle: '<p>Play the new CrashLands season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/deafy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />
