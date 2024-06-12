import { useTranslation } from "react-i18next";

export const Comfort = ({ hotelDetails }) => {
  const { t } = useTranslation(["details", "translation"]);

  const comfort = hotelDetails.comfort || [];
  return (
    <div>
      <p>
        {t("translation:comfort")}: {comfort.join(", ")}
      </p>
    </div>
  );
};
