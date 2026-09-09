import { Request, Response } from "express"
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {
    async handle(req: Request, res: Response){
        const item_id = (req.params.item_id ?? req.query.item_id ?? req.body.item_id)
        // resolvido da mesma maneira do "removeOrder"

        const removeItemService = new RemoveItemService();

        const order = await removeItemService.execute({
            item_id
        });

        res.json(order);
    }
}

export { RemoveItemController }