import { QrCode } from "lucide-react";
import { generateQRCode } from "@/utils/qrcode";

interface CustomQRCodeProps {
  payload: string;
}

export default async function CustomQRCode({ payload }: CustomQRCodeProps) {
  const qrCodeDataUrl = await generateQRCode(payload);

  return (
    <div className="flex flex-col items-center">
      <div className="w-64 h-64 rounded-xl overflow-hidden bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        {qrCodeDataUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={qrCodeDataUrl || "/placeholder.svg"}
            alt={`QR Code linking to ${payload}`}
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <QrCode className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <a
          href={payload}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#900000] hover:underline"
        >
          {payload.replace(/^https?:\/\//, "")}
        </a>
      </div>
    </div>
  );
}
