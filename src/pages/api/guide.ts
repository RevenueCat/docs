import { NextApiRequest, NextApiResponse } from "next";
import {
  GuideRequest,
  GeneratedGuide,
} from "../../components/SetupGuideGenerator/types";

// This URL should be moved to an environment variable
const GUIDE_GENERATOR_SERVICE_URL =
  process.env.GUIDE_GENERATOR_SERVICE_URL || "http://localhost:3001";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const request: GuideRequest = req.body;

    const response = await fetch(
      `${GUIDE_GENERATOR_SERVICE_URL}/api/generate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      },
    );

    if (!response.ok) {
      throw new Error(`Guide generation service returned ${response.status}`);
    }

    const guide: GeneratedGuide = await response.json();
    res.status(200).json({ guide });
  } catch (error) {
    console.error("Error generating guide:", error);
    res.status(500).json({ message: "Error generating guide" });
  }
}
