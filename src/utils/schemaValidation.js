export function validateSchema(schema, data) {
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
    const message = error.details.map((detail) => detail.message).join(", ");
    throw { status: 422, message };
  }
}
