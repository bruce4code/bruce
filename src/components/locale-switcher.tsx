"use client"

import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LocaleSwitcher() {
  const t = useTranslations("language")
  const pathname = usePathname()
  const router = useRouter()
  const { locale } = useParams<{ locale: string }>()

  const currentLocale = locale || "en"
  const nextLocale = currentLocale === "en" ? "zh" : "en"

  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={() => {
        router.replace(pathname, { locale: nextLocale })
      }}
      className="text-xs font-mono"
    >
      {t("switchTo")}
    </Button>
  )
}