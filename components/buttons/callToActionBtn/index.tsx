type CallToActionBtnType = {
  children: React.ReactNode;
};

export default function CallToActionBtn({ children }: CallToActionBtnType) {
  return (
    <button className="bg-primary-color text-primary-white w-44 h-12 rounded-sm uppercase mt-4">
      {children}
    </button>
  );
}
