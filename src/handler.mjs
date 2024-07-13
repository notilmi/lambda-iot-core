import { db } from "./db.mjs";

export async function handler(event) {
  try {
    const { timestamp, humidity, temperature } = event;

    await db.iotlog.create({
      data: {
        timestamp: new Date(timestamp),
        humidity,
        temperature,
        origin,
      },
    });

    console.log("Saved Event", event);

    return {
      message: "Saved",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error",
    };
  }
}
