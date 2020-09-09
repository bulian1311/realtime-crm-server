const cashe: { [key: string]: any } = {};

const accessEnv = (key: string, defaultValue?: string) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env`);
  }

  if (cashe[key]) return cashe[key];

  cashe[key] = process.env[key];

  return process.env[key];
};

export default accessEnv;
