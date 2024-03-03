"use client";
import Image from "next/image";
import React, { useReducer } from "react";

const initialState = { value: false };

type ACTIONTYPE = { type: "open" } | { type: "close" };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "open":
      return { value: (state.value = true) };
    case "close":
      return { value: (state.value = false) };
    default:
      throw new Error();
  }
}

export default function AboutFaqs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleOpen() {
    if ((state.value = true)) {
      dispatch({ type: "open" });
    } else {
      dispatch({ type: "close" });
    }
  }

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h4 className="text-center font-mono text-32 font-bold text-grey-dark">
          FAQs
        </h4>
      </div>
      <section className="flex flex-col gap-8">
        <h4 className="text-center font-mono text-24 font-bold text-grey-dark">
          How it works
        </h4>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 bg-grey-dimmed/40 px-8 py-9">
            <div
              onClick={handleOpen}
              className="flex cursor-pointer items-center justify-between gap-4 font-mono text-18 font-bold text-grey-dark"
            >
              <p>How do I download the app?</p>
              {!state.value ? (
                <Image
                  className="rotate-180"
                  src="/icons/chevron.svg"
                  width={16}
                  height={8}
                  alt="chevron down"
                />
              ) : (
                <Image
                  src="/icons/chevron.svg"
                  width={16}
                  height={8}
                  alt="chevron down"
                />
              )}
            </div>
            {!state.value ? (
              <p className="font-sans text-15 text-grey-dark">
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-6 bg-grey-dimmed/40 px-8 py-9">
            <div className="flex cursor-pointer items-center justify-between gap-4 font-mono text-18 font-bold text-grey-dark">
              <p>Can I find a nearby Scoots?</p>
              <Image
                src="/icons/chevron.svg"
                width={16}
                height={8}
                alt="chevron down"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-grey-dimmed/40 px-8 py-9">
            <div className="flex cursor-pointer items-center justify-between gap-4 font-mono text-18 font-bold text-grey-dark">
              <p>Do I need a license to ride?</p>
              <Image
                src="/icons/chevron.svg"
                width={16}
                height={8}
                alt="chevron down"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h4 className="text-center font-mono text-24 font-bold text-grey-dark">
          Safe driving
        </h4>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 bg-grey-dimmed/40 px-8 py-9">
            <div
              onClick={handleOpen}
              className="flex cursor-pointer items-center justify-between gap-4 font-mono text-18 font-bold text-grey-dark"
            >
              <p>Should I wear a helmet?</p>
              {!state.value ? (
                <Image
                  className="rotate-180"
                  src="/icons/chevron.svg"
                  width={16}
                  height={8}
                  alt="chevron down"
                />
              ) : (
                <Image
                  src="/icons/chevron.svg"
                  width={16}
                  height={8}
                  alt="chevron down"
                />
              )}
            </div>
            {!state.value ? (
              <p className="font-sans text-15 text-grey-dark">
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-6 bg-grey-dimmed/40 px-8 py-9">
            <div className="flex cursor-pointer items-center justify-between gap-4 font-mono text-18 font-bold text-grey-dark">
              <p>How about the rules & regulations?</p>
              <Image
                src="/icons/chevron.svg"
                width={16}
                height={8}
                alt="chevron down"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-grey-dimmed/40 px-8 py-9">
            <div className="flex cursor-pointer items-center justify-between gap-4 font-mono text-18 font-bold text-grey-dark">
              <p>What if I damage my Scoot?</p>
              <Image
                src="/icons/chevron.svg"
                width={16}
                height={8}
                alt="chevron down"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
