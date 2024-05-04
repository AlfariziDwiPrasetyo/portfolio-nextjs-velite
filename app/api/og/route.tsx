import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { RiCodeBoxFill } from "react-icons/ri";
import { BsGithub, BsGlobe } from "react-icons/bs";

export const runtime = "edge";

const montserratBold = fetch(
  new URL("../../../assets/fonts/Montserrat-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await montserratBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");
    const type = searchParams.get("type");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading = title.length > 60 ? `${title.substring(0, 60)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <RiCodeBoxFill size={30} />
            <p tw="text-sm">shirookami</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              {type}/
            </div>
            <div tw="flex font-bold text-[90px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full">
            <div tw="flex text-xl align-items:baseline">
              <BsGlobe size={25} />
              <div tw="ml-1">shirookami.vercel.app</div>
            </div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-5">
                <BsGithub size={25} />
                <div tw="ml-1">AlfariziDwiPrasetyo</div>
              </div>
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
            weight: 400,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate an image", { status: 500 });
  }
}
