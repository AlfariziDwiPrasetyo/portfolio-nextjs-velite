import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const montserratBold = fetch(
  new URL("../../../assets/fonts/Montserrat-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await montserratBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <p tw="ml-2 font-bold text-2xl">Shirookami</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">shirookami.vercel.app</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">https://github.com/AlfariziDwiPrasetyo</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate an image", { status: 500 });
  }
}
