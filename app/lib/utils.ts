interface DataFormat {
    data: string;
    format: Record<string, any>;
}

export function generateContentText({ data, format }: DataFormat): string {
    const expectedFormatText = JSON.stringify(format, null, 2);
    const content = `DATA: "${data}"\n\nExpected JSON format: ${expectedFormatText}\n\nValid JSON output in expected format:`;
    return content;
}
