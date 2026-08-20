import { getArea } from "@/content/areas";
import { areaMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/areas/AreaPage";

const area = getArea("direito-contratual");

export const metadata = areaMetadata(area);

export default function DireitoContratual() {
  return <AreaPage area={area} />;
}
