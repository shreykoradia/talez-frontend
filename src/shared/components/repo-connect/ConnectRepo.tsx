import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/ui/ui/command";
import { BookDashed } from "lucide-react";

const ConnectRepo = () => {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <BookDashed className="mr-2 h-4 w-4" />
                <span>Repository Title</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </>
  );
};

export default ConnectRepo;
