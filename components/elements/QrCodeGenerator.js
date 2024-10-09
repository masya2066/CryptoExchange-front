import React, { useEffect, useState } from 'react';
import QRCodeLib from 'qrcode'; // Renamed to avoid conflict

export default function QRCodeGen({usdtAddress}) {
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    useEffect(() => {
        const generateQRCode = async () => {
            try {
                const url = await QRCodeLib.toDataURL(usdtAddress);
                setQrCodeUrl(url);
            } catch (err) {
                console.error('Failed to generate QR code:', err);
            }
        };

        generateQRCode();
    }, [usdtAddress]);

    return (
        <div className={"qr-code"}>
            {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="USDT QR Code" />
            ) : (
                <div className={"qr-code"}/>
            )}
        </div>
    );
};
