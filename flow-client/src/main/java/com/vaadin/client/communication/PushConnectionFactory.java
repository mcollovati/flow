/*
 * Copyright 2000-2017 Vaadin Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.vaadin.client.communication;

import com.vaadin.client.Registry;

/**
 * Factory for {@link PushConnection}.
 *
 * Produces a {@link PushConnection} for the provided {@link Registry}
 */
@FunctionalInterface
public interface PushConnectionFactory {

    /**
     * Creates a new {@link PushConnection} instance for the given {@code registry}.
     *
     * @param registry the global registry
     * @return the push connection instance
     */
    PushConnection create(Registry registry);
}
