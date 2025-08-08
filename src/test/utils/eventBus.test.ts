import { eventBus } from "../../micro-frontends/shared/utils/eventBus";
import { describe, it, vi, beforeEach, expect } from "vitest";

describe("EventBus", () => {
  beforeEach(() => {
    // Limpar todos os listeners antes de cada teste
  });

  it("should emit and receive events", () => {
    const mockHandler = vi.fn();
    const eventData = { message: "test" };

    eventBus.on("test-event", mockHandler);
    eventBus.emit("test-event", eventData);

    expect(mockHandler).toHaveBeenCalledWith(eventData);
  });

  it("should handle multiple listeners for the same event", () => {
    const mockHandler1 = vi.fn();
    const mockHandler2 = vi.fn();
    const eventData = { message: "test" };

    eventBus.on("test-event", mockHandler1);
    eventBus.on("test-event", mockHandler2);
    eventBus.emit("test-event", eventData);

    expect(mockHandler1).toHaveBeenCalledWith(eventData);
    expect(mockHandler2).toHaveBeenCalledWith(eventData);
  });

  it("should remove specific listener", () => {
    const mockHandler = vi.fn();
    const eventData = { message: "test" };

    eventBus.on("test-event", mockHandler);
    eventBus.off("test-event", mockHandler);
    eventBus.emit("test-event", eventData);

    expect(mockHandler).not.toHaveBeenCalled();
  });

  it("should handle events with no listeners", () => {
    expect(() => {
      eventBus.emit("non-existent-event", {});
    }).not.toThrow();
  });
});
