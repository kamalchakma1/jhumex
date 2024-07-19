import { atom } from "recoil";


export const MenuHamburgerAtom=atom({
    key:"MenuHamburgerAtom",
    default: false
})

export const SubMenuAtom=atom({
    key:"SubMenuAtom",
    default: false
})

export const SubMenuMobileAtom = atom({
    key:"SubMenuMobileAtom",
    default: false
})

export const OrderFromAtom= atom({
    key:"OrderFormAtom",
    default: false
})

export const LoaderAtom = atom({
    key:"LoaderAtom",
    default: false
})
export const FeedbackLoaderAtom = atom({
  key: "FeedbackLoaderAtom",
  default: false,
});
export const ContactLoaderAtom = atom({
  key: "ContactLoaderAtom",
  default: false,
});
export const IsMailSentAtom = atom({
    key:"IsMailSentAtom",
    default: false
})
export const IsFeedbackSentAtom = atom({
  key: "IsFeedbackSentAtom",
  default: false,
});
export const IsContactSentAtom = atom({
  key: "IsContactSentAtom",
  default: false,
});