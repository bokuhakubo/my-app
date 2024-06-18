import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Post from "../../../../model/Post";

export const GET = async (request) => {
    try {
        await connect();

        const posts = await Post.find();

        const headers = {
            "Access-Control-Allow-Origin": "*", // すべてのオリジンからアクセスを許可
            "Access-Control-Allow-Methods": "GET, OPTIONS", // 許可するHTTPメソッド
            "Access-Control-Allow-Headers": "Content-Type", // 許可するヘッダー
            "Access-Control-Allow-Credentials": "true", // 認証情報（クッキーなど）の送信を許可
        };

        return new NextResponse(JSON.stringify(posts), {
            headers,
            status: 200,
        });
    } catch (err) {
        return new NextResponse('Database Error', { status: 500 });
    }
};

// プリフライトリクエスト（OPTIONS）に対応
export const OPTIONS = async () => {
    const headers = {
        "Access-Control-Allow-Origin": "*", // すべてのオリジンからアクセスを許可
        "Access-Control-Allow-Methods": "GET, OPTIONS", // 許可するHTTPメソッド
        "Access-Control-Allow-Headers": "Content-Type", // 許可するヘッダー
        "Access-Control-Allow-Credentials": "true", // 認証情報（クッキーなど）の送信を許可
    };

    return new NextResponse(null, {
        headers,
        status: 200,
    });
};
