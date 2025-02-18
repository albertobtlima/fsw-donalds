import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">product page</h1>
      <Button>FSW</Button>
      <Input placeholder="A turma do Chaves" />
    </div>
  );
};

export default ProductPage;
