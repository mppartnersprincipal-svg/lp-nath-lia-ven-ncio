import { getArea } from "@/content/areas";
import { areaMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/areas/AreaPage";

const area = getArea("direito-da-saude");

export const metadata = areaMetadata(area);

export default function DireitoDaSaude() {
  return <AreaPage area={area} />;
}
