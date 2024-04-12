import { getData } from "~/utils/api-link";
import FullPost from ".";

export default async function ProductDetail({
  params,
}: {
  params: { id: number }
}) {
  const data = await getData.getDataById(params.id);

  if (!data) {
    return <h1>Loading</h1>
  }
  return (
    <FullPost data={data} />
  );
}
