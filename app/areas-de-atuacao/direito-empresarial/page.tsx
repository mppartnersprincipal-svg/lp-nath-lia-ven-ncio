import { getArea } from "@/content/areas";
import { areaMetadata } from "@/lib/seo";
import { AreaPage } from "@/components/areas/AreaPage";

const area = getArea("direito-empresarial");

export const metadata = areaMetadata(area);

export default function DireitoEmpresarial() {
  return <AreaPage area={area} />;
}
