declare namespace CodeceptJS {
  interface I {
    [key: string]: any
  }
}

declare const Feature: (name: string) => void
declare const Scenario: (name: string, fn: (args: { I: CodeceptJS.I }) => any) => void

declare const Before: (fn: (args: { I: CodeceptJS.I }) => any) => void
declare const After: (fn: (args: { I: CodeceptJS.I }) => any) => void
declare const BeforeSuite: (fn: (args: { I: CodeceptJS.I }) => any) => void
declare const AfterSuite: (fn: (args: { I: CodeceptJS.I }) => any) => void
declare const locate: (locator: string) => any
