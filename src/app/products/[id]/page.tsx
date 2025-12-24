interface PageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: PageProps) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  );
}
