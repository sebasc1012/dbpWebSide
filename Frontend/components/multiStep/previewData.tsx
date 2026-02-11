"use client";

interface PreviewDataProp {
  email: string;
  name: string;
  plan: string;
}

export function PreviewData({ email, name, plan }: PreviewDataProp) {
  return (
    <div>
      <ul className="text-black">
        <li>{`Name: ${name}`}</li>
        <li>{`Email: ${email}`}</li>
        <li>{`Plan: ${plan}`}</li>
      </ul>
    </div>
  );
}
