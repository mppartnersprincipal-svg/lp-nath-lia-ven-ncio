import { getArea } from "@/content/areas";
import { areaMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/areas/AreaPage";

const area = getArea("direito-bancario");

export const metadata = areaMetadata(area);

export default function DireitoBancario() {
  return <AreaPage area={area} />;
}
