import * as React from 'react';
import { View } from 'react-native';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';

const RadioGroup = React.forwardRef<RadioGroupPrimitive.RootRef, RadioGroupPrimitive.RootProps>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('web:grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem: React.ForwardRefExoticComponent<RadioGroupPrimitive.ItemProps & React.RefAttributes<RadioGroupPrimitive.ItemRef>> =
  React.forwardRef<RadioGroupPrimitive.ItemRef, RadioGroupPrimitive.ItemProps>(({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          'aspect-square h-4 w-4 native:h-5 native:w-5 rounded-full justify-center items-center border border-primary text-primary web:ring-offset-background web:focus:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
          props.disabled && 'web:cursor-not-allowed opacity-50',
          className
        )}
        {...props}>
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <View className="aspect-square h-[9px] w-[9px] native:h-[10] native:w-[10] bg-primary rounded-full" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  });
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
