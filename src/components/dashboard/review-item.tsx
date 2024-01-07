"use client";
import { useTransition } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Validate = ({ validate }: { validate: () => void }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      role="button"
      onClick={() => startTransition(validate)}
      className="rounded-md bg-green-500 px-3 py-1 text-white"
    >
      {isPending ? "validating..." : "Validate"}
    </button>
  );
};

const Remove = ({ remove }: { remove: () => void }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      role="button"
      onClick={() => startTransition(remove)}
      className="mx-2 rounded-md bg-red-500 px-3 py-1 text-white"
    >
      {isPending ? "removing..." : "Remove"}
    </button>
  );
};

export type ItemProps = {
  label: string;
  valueJson: string;
  preview: React.ReactNode;
  remove: () => void;
  validate: () => void;
};

export function ReviewItem(props: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <li
        onClick={openModal}
        className=" cursor-pointer rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        {props.label}
      </li>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-gray-500 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-3xl font-medium leading-6 text-white"
                  >
                    Submission details
                  </Dialog.Title>
                  <div className="flex flex-row items-start  py-4">
                    <div className="mr-2 max-h-[600px] flex-1 overflow-x-auto rounded-lg border border-gray-800 p-4">
                      <pre className=" overflow-x-auto text-sm ">
                        {props.valueJson}
                      </pre>
                    </div>
                    {props.preview}
                  </div>

                  <div className="mt-4">
                    <Validate validate={props.validate} />
                    <Remove remove={props.remove} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
