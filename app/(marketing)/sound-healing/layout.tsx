import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sound Healing Sanctuary | Lemuria",
  description: "Experience profound emotional recalibration through the sacred frequency of Crystal Bowls and Gongs.",
};

export default function SoundHealingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
