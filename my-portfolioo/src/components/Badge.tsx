type BadgeProps = {
    text: string;
  }

export default function Badge({ text }: BadgeProps) {
    return (
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
            {text}
        </div>
    );
}
