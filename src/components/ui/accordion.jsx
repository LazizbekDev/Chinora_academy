import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 text-left font-medium text-foreground transition-all group",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        className={cn(
          "ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background transition-all",
          "group-hover:bg-transparent group-hover:text-primary "
        )}
      >
        {/* icon state (plus / x) */}
        <Plus className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:hidden" />
        <X className="h-5 w-5 hidden transition-transform duration-200 group-data-[state=open]:block" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-5 pt-1 text-base leading-relaxed", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
