import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard({ id, title, image, price, handleDelete }) {
  const renderDeleteIcon = handleDelete ? (
    <XMarkIcon className="h-6 w-6 text-np_black cursor-pointer" onClick={() => handleDelete(id)} />
  ) : null;

  return (
    <div className="text-np_black flex justify-between items-center gap-2 p-3">
      <div>
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
        </figure>
      </div>
      <p className="max-h-20 text-sm font-light overflow-y-clip">{title}</p>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderDeleteIcon}
      </div>
    </div>
  );
}

export default OrderCard;
