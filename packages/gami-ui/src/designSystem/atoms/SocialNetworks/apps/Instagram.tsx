import { App, createShareButton, IApp, IAppOptions } from '../utils'

export class InstagramStrategy implements IApp {
  makeLink(_: string, options: IAppOptions) {
    const { user } = options
    const link = options.isMobileOrTablet
      ? `instagram://user?username=${user}`
      : `http://instagram.com/_u/${user}/`

    return link
  }
}

export interface IInstragram {
  color: string
  user: string
}

export const Instagram = ({ color, user }: IInstragram) => {
  return createShareButton({
    app: 'instagram',
    link: new App().setStrategy(new InstagramStrategy()).makeLink('', { user }),
    color,
  })
}
