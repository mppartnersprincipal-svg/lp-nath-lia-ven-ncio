import { getArea } from "@/content/areas";
import { areaMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/areas/AreaPage";

const area = getArea("direito-civel");

export const metadata = areaMetadata(area);

export default function DireitoCivel() {
  return <AreaPage area={area} />;
}
