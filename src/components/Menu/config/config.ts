import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Bridge'),
        href: 'https://Bridge.BearSwap.net',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: 'More',
    href: '#',
    icon: 'More',
    hideSubNav: false,
    items: [
      {
        label: t('Website'),
        href: 'https://MiniRipple.net',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      }
    ],
  },
]

export default config
