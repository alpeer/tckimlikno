export interface ITCKimlikGirdileri {
  tc: number
  ad: string
  soyad: string
  dogum_yili: number
}

declare const TCKimlikDogrulayici: (params: ITCKimlikGirdileri) => Promise<boolean>
export default TCKimlikDogrulayici