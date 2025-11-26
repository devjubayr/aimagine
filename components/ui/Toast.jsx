"use client";

import { toast as sonnerToast } from "sonner";

const variants = {
  error: " text-blue-500",
  success: " text-white/90",
  alert: " text-blue-600",
};

export function toast({ title, description, buttonLabel, variant = "error" }) {
  return sonnerToast.custom((id) => (
    <ToastComp
      id={id}
      title={title}
      description={description}
      button={{
        label: buttonLabel,
        onClick: () => sonnerToast.dismiss(),
      }}
      theme={variants[variant]}
    />
  ));
}

//  toast({
//           title: "This is a headless toast",
//           description:
//             "You have full control of styles and jsx, while still having the animations.",
//           button: {
//             label: "ⓧ",
//             onClick: () => sonnerToast.dismiss(),
//           },
//         });

function ToastComp(props) {
  const { title, description, button, id, theme } = props;

  return (
    <div className="flex rounded-md bg-zinc-700 shadow-lg ring-1 ring-white/5 w-full md:max-w-[364px] items-center p-4">
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className={`text-sm font-medium ${theme}`}>{title}</p>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      {button.label && (
        <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
          <button
            className="rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
            onClick={() => {
              button.onClick();
              sonnerToast.dismiss(id);
            }}
          >
            {button.label}
          </button>
        </div>
      )}
    </div>
  );
}
