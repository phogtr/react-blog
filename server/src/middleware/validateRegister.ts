import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

// currying
const validateRegister =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (e) {
      return res.status(400).send(e.errors);
    }
  };

export default validateRegister;
