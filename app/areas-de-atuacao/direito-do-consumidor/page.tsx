import { getArea } from "@/content/areas";
import { areaMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/areas/AreaPage";

const area = getArea("direito-do-consumidor");

export const metadata = areaMetadata(area);

export default function DireitoDoConsumidor() {
  return <AreaPage area={area} />;
}
