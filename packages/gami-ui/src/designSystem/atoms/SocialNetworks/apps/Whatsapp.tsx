import { transformObjectToParams } from 'core/helpers'
import { createShareButton, IApp, IAppOptions } from '../utils'

export class WhatsappStrategy implements IApp {
  makeLink(message: string, options: IAppOptions) {
    const platform = options.isMobileOrTablet ? 'api' : 'web'
    const { phone } = options

    const link = `https://${platform}.whatsapp.com/send${transformObjectToParams(
      {
        phone,
        text: message,
      }
    )}`

    return link
  }
}

export interface IWhatsapp {
  message: string
  phone: string
  color: string
}

export const Whatsapp = ({ message, phone, color = '#00E676' }: IWhatsapp) => {
  return createShareButton({
    app: 'whatsapp',
    link: new WhatsappStrategy().makeLink(message, { phone }),
    color,
  })
}
