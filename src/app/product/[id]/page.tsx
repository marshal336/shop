import FullPost from ".";

export default async function ProductDetail({
  params,
}: {
  params: { id: number }
}) {
  return (
    <FullPost id={params.id} />
  );
}
