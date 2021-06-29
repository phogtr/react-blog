import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

// currying
const validateRequest =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (e) {
      return res.status(400).send({
        errorMessage: e.errors,
        path: e.path,
      });
    }
  };

export default validateRequest;
